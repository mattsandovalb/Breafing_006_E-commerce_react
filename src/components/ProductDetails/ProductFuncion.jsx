import React, { useEffect, useState } from "react";


const ProductFuncion = () =>{
    
    useEffect(()=>{
    });

    const giveMeAccesKey = async () => {
        const res =await fetch (`${process.env.REACT_APP_API_BASE_URL}/v1/connect/oauth2/token`,{ 
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', 
                'Autohorization': 'Basc' + process.env.REACT_APP_SECREATTING
            },
            body: 'grant_type=client_credentials&scope=product.compact'
        })
        .then(response => response.json())

        return res.access_token;
    }

    const giveMeProductsDetails = async () =>{
        const accessToken = await giveMeAccesKey()

        const productsUrl = `${process.env.REACT_APP_API_BASE_URL}/v1/products?filter.term=${"milk"}`;


        const productsResponse = fetch (productsUrl, {
            method: 'GET', 
            CACHE: 'no-cache',
            headers: {
                Authorization: `bearer ${accessToken}`,
                "Content-Type": "application/json; charset=utf-8"
            }
        }).then(response => response.json())
            .then(data =>{
                console.log('Success:', data.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    giveMeProductsDetails();
    




    return(
        <div>

            <h1></h1>

        </div>
    )
}

export default ProductFuncion
