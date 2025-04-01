import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Base_url from "../config/Baseurl"
import axios from 'axios';

const Inserdata = () => {
   const [mydata,Setmydata] = useState({})
   const [upload,Setupload] = useState("")

    const naddleSubmit =(e)=>{
       let name = e.target.name
       let value=e.target.value
        Setmydata(values=>({...values,[name]:value}))
        console.log(mydata)
    }

    const imagehandle=(e)=>{
       let value = e.target.files
       Setupload(value)


      //  const files = Array.from(e.target.files);
      //  Setupload(files)
      //  console.log(upload)
    }
  
     const finalSubmit=async(e)=>{
      e.preventDefault()
      let api = `${Base_url}admin/insertdata`
      const formdata=new FormData()
    // apend text data
     
      for( let key in mydata){
        formdata.append(key,mydata[key])
        console.log(mydata[key])
      }
      //appen images file
       for(let i=0;i<upload.length;i++){
        formdata.append("upload",upload[i])
       }
      // upload.forEach((file) => {
      //   formdata.append("img", file);
      // })

      try {
           const response = await axios.post(api,formdata,{
            headers: { "Content-Type": "multipart/form-data" },
           })
           console.log(response.data)
           alert("file apload suceesfully")
      } catch (error) {
        console.log(error)
      }
     }
  return (
  <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>product name</Form.Label>
        <Form.Control type="text" placeholder="Enter product" name='name' onChange={naddleSubmit} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="enter price" name='price' onChange={naddleSubmit} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>data</Form.Label>
        <Form.Control type="text" placeholder="inter data" name='data' onChange={naddleSubmit} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" >
        <Form.Label>select feild</Form.Label>
        <Form.Select id="disabledSelect" name='feild' onChange={naddleSubmit}>
            <option>Fruits</option>
            <option>Non vag</option>
            <option>Dairy&bakery</option>
            <option>frozen</option>
            <option>personal care</option>
            <option>Kitchen/home</option>

          </Form.Select>
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>upload</Form.Label>
        <Form.Control type="file" multiple placeholder="inter data"  onChange={imagehandle} />
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={finalSubmit}>
        Submit
      </Button>
    </Form>
  </>
  )
}

export default Inserdata