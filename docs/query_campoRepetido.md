{
 filter: {
  expenseType: {
   $eq: 'Transport'
  }
 }
}

{$and:[{"expenseBy.email":"eva@gmail.com"}, {"expenseType": {$eq: "Transport"}}]}