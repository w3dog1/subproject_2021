import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Icon } from 'antd';
import axios from 'axios';

function FileUpload() {

    const [Images, setImages] = useState([])

    const dropHandler = (files) => {
        
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0])
        // 왜.. 왜 이러세요
        // formData랑 config 같이 안 보내면 form 보낼 때 error 발생
        axios.post('/api/product/image', formData, config)
            .then(response => {
                if (response.data.success) {
                    setImages([...Images, response.data.filePath])
                } else {
                    alert('파일을 저장하는 데 실패하였습니다.')
                }
            })
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone onDrop={dropHandler}>
                {({ getRootProps, getInputProps }) => (
                    <div
                        style={{ width:300, height: 240, border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Icon type="plus" style={{fontSize: '3rem'}} />
                    </div>                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '350px', height: '240px', overflow: 'scroll'}}>
                {Images.map((image, index) => (
                    <div>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px'}}
                            src={`http://localhost:3000/${image}`} />
                    </div>
                ))}

            </div>
    </div>
    )}

export default FileUpload