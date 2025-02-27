import axios from "axios";

const HF_API_KEY = process.env.REACT_APP_HF_API_KEY;
// Load from .env file
const HF_API_URL =
  "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct";

export const generateDescription = async (bookTitle, bookAuthor) => {
  const prompt = `Generate a small and engaging book description (max 225 characters) for a book titled "${bookTitle}" by ${bookAuthor}`;

  try {
    const response = await axios.post(
      HF_API_URL,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    let description =
      response.data[0]?.generated_text || "AI couldn't generate a descrip.";

    description = description
      .replace(new RegExp(`.*${bookAuthor}:\\s*[^\\n]+\\n`), "")
      .trim();

    description = description.substring(description.indexOf("\n") + 1).trim();

    // Limit the response to 225 characters & prevent cutting words
    description = description.slice(0, 225).trim();
    description = description.slice(0, description.lastIndexOf(" ")) + "...";

    return description;
  } catch (error) {
    console.error("AI generation error:", error);
    return "Failed to generate descrip.";
  }
};

//---------------------Other Way---------------------------------//

// export const generateDescription = async (bookTitle, bookAuthor) => {
//   const prompt = `Generate a brief book description (max 225 characters) for a book titled "${bookTitle}" by ${bookAuthor}. Keep it concise and engaging.`;

//   console.log("Prompt:", prompt);

//   try {
//     const response = await axios.post(
//       HF_API_URL,
//       { inputs: prompt },
//       {
//         headers: {
//           Authorization: `Bearer ${HF_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     // let description =
//     //   response.data[0]?.generated_text || "AI couldn't generate a description.";

//     // // Remove the unwanted part before "Description:"
// // if (description.includes("Description:")) {
// //   description = description.split("Description:")[1].trim();
// // }

// //Example:  // let description = "Book Title: Twilight  Author: Stephenie Meyer  Description: Bella falls in love with Edward...";
//              // [
//              //   "Book Title: Twilight  Author: Stephenie Meyer  ",
//              //   "Bella falls in love with Edward..."
//              // ]
//              // parts[0] → Before "Description:" (unwanted part)
//              // parts[1] → After "Description:" (the actual description we want)

//     // // Limit the response to 225 characters
//     // description = description.slice(0, 225);
//     // return description;

//     return (
//       response.data[0]?.generated_text || "AI couldn't generate a description."
//     );
//   } catch (error) {
//     console.error("AI generation error:", error);
//     return "Failed to generate description.";
//   }
// };

//----------------Other way to Fetch ---------------------------------//
// const generateDescription = async () => {
//   const prompt = `Write a creative book description for a book titled "${title}" by ${author} in the genre of ${genre}.`;

//   try {
//     const response = await fetch(HF_API_URL, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${HF_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ inputs: prompt }),
//     });

//     const data = await response.json();
//     setDescription(
//       data[0]?.generated_text || "AI couldn't generate a description."
//     );
//   } catch (error) {
//     console.error("AI generation error:", error);
//     setDescription("Failed to generate description.");
//   }
// };
