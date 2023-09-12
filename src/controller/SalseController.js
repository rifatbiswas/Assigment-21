const SalesModel = require("../model/SalesModel")
exports.TotalRevenue=async(req,res)=>{
  const totalRevenue = await SalesModel.aggregate([
    {
      $group: {
        _id: 0,
        totalRevenue: { $sum: "$price" },
      },
    },
  ]);

  res.json({ totalRevenue });

}

exports.QuantityByProduct =async(req,res)=>{
  const quantityByProduct = await SalesModel.aggregate([
    {
      $group: {
        _id: "$product",
        quantity: { $sum: "$quantity" },
      },
    },
  ]);
  res.json({ quantityByProduct  });
}

exports.TopProducts =async(req,res)=>{
  const topProducts = await SalesModel.aggregate([
    {
      $group: {
        _id: "$product",
        totalRevenue: { $sum: "$price" },
        rank: { $max: "$totalRevenue" },
      },
    },
    {
      $sort: {
        rank: -1,
      },
    },
    {
      $limit: 5,
    },
  ]);
  res.json({ topProducts });
}
exports.AveragePrice =async(req,res)=>{
  const averagePrice = await SalesModel.aggregate([
    {
      $group: {
        _id: null,
        averagePrice: { $avg: "$price" },
      },
    },
  ]);
  res.json({ averagePrice });
}
exports.RevenueByMonth =async(req,res)=>{
  const revenueByMonth = await SalesModel.aggregate([
    {
      $group: {
        _id: { year: { $year: "$date" }, month: { $month: "$date" } },
        totalRevenue: { $sum: "$price" },
      },
    },
  ]);

  res.json({ revenueByMonth });
}

exports.HighestQuantitySold =async(req,res)=>{
  const highestQuantitySold = await SalesModel.aggregate([
    {
      $group: {
        _id: "$product",
        quantity: { $max: "$quantity" },
      },
    },
  ]);
  res.json({ highestQuantitySold });
}