package com.example.ecommerceapp.services;
import com.example.ecommerceapp.entities.ProductCategory;
import java.util.List;


public interface ProductCategoryService {

    List<ProductCategory> findAllCategories();

    ProductCategory saveCategory(ProductCategory productCategory);

    ProductCategory findById(long id);

    ProductCategory update(ProductCategory productCategory);

    void deleteCategory(long id);

}
