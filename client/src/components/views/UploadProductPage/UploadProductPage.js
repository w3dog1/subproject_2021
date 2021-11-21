import React, { useState } from 'react'
import {Typography, Button, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import FileUpload from '../../utils/FileUpload';

const { Textarea } = Input;

const Categories = [
    {key: 1, value: "모슬린스카프"},
    {key: 2, value: "칸타퀼드패브릭"},
    {key: 3, value: "목화솜이불"},
    {key: 4, value: "드래곤백"},
    {key: 5, value: "패션의류/foglinenwork"},
    {key: 6, value: "가나볼가바구니"}
]

function UploadProductPage() {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Category, setCategory] = useState(1)
    const [Images, setImages] = useState([])


    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }
    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const categoryChangeHandler = (event) => {
        setCategory(event.currentTarget.value)
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 level={2}>상품 업로드</h2>
            </div>
            
            
            <Form>

                /* DropZone */
                
                <FileUpload />
                <br />
                <br />
                <label>상품명</label>
                <Input onChange={titleChangeHandler} value={Title} />
                <br />
                <br />
                <label>상품 설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description} />
                <br />
                <br />
                <label>가격($)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price} />
                <br />
                <br />
                <label>상품 카테고리</label>
                <br />
                <select onChange={categoryChangeHandler} value={Category}>

                    {Categories.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br />
                <br />
                <Button>
                    확인
                </Button>


            </Form>
        </div>
    )
}

export default UploadProductPage