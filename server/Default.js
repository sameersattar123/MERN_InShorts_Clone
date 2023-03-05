import {data} from "./Constants/data.js";
import news from "./Model/NewsSchema.js";
const Default = async () => {
  try {
    await news.insertMany(data);
    console.log("data inserted successfully");
  } catch (error) {
    console.log(error);
  }
};
 
export default Default;
