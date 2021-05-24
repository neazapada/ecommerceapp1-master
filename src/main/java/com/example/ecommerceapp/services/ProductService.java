package com.example.ecommerceapp.services;

import com.example.ecommerceapp.entities.Product;


import java.util.List;

public interface ProductService {
    List<Product> findAllProducts();

    Product saveProduct(Product product);

    Product findById(long id);

    Product update(Product product);

    void deleteProduct(long id);

    List<Product> findByCategoryId(long id);
}