import news from "../Model/NewsSchema.js"


export const NewsControllers = async(req , res) => {
  try {
    const data = await news.find({});
    res.status(200).json(data)
} catch (error) {
    res.status(500).json({message : data.message}) 
  }
}
