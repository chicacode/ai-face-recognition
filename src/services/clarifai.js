// Face Detection Model Configuration
const MODEL_ID = "face-detection";
const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";

export const detectFaces = async (imageUrl) => {

  if(!imageUrl || imageUrl.trim() === "") {
    throw new Error("Image URL is required");
  }

  const PAT = import.meta.env.VITE_CLARIFAI_PAT;
  const USER_ID = import.meta.env.VITE_CLARIFAI_USER_ID;
  const APP_ID = import.meta.env.VITE_CLARIFAI_APP_ID;


  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: imageUrl.trim(),
          },
        },
      },
    ],
  });
 
  // console.log('Request body:', raw); // Debug log
 
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
      "Content-Type": "application/json",
    },
    body: raw,
  };

  try {
    const response = await fetch(
      `/api/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`,
      // `/api/v2/models/${MODEL_ID}/outputs`,
      requestOptions
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      throw new Error(errorData.status?.description || "API request failed");
    }

    const result = await response.json();
    // console.log("API Result:", result);

    if (result.status.code !== 10000) {
      throw new Error(result.status.description || "API request failed");
    }

    return result;
  } catch (error) {
    console.error("Error detecting faces:", error);
    throw error;
  }
};

// Helper function to calculate face bounding box positions
export const calculateFaceBox = (clarifaiFace, imageWidth, imageHeight) => {
  const face = clarifaiFace.region_info.bounding_box;

  return {
    leftCol: face.left_col * imageWidth,
    topRow: face.top_row * imageHeight,
    rightCol: imageWidth - face.right_col * imageWidth,
    bottomRow: imageHeight - face.bottom_row * imageHeight,
  };
};
