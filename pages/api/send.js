// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function  handler(req, res) {
  
      
      
  

  if (req.body 
  && Object.keys(req.body).length === 0
  && Object.getPrototypeOf(req.body) === Object.prototype) 
  {

    res.status(500).json({message: "internal server error"})

  }
  else
  {
    return res.status(200).json({ 
      name: req.body.name,
      lastName: req.body.lastName,
      email:  req.body.email,
      message: req.body.message,
    })
  }
}
