package com.example.ecommerceapp.services;

import com.example.ecommerceapp.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;

public interface ProductService {
    List<Product> findAllProducts();

    Product saveProduct(Product product);

    Product findById(long id);

    Product update(Product product);

    void deleteProduct(long id);

    Page<Product> findByCategoryId(long id, Pageable pageable);

    List<Product> getAllProducts(Integer pageNo, Integer pageSize, String sortBy);

    List<Product> findByName(String name);

}