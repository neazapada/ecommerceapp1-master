package com.example.ecommerceapp.services;

import com.example.ecommerceapp.entities.ProductCategory;
import com.example.ecommerceapp.repository.ProductCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductCategoryServiceImpl implements ProductCategoryService {

    private final ProductCategoryRepository productCategoryRepository;

    public ProductCategoryServiceImpl(ProductCategoryRepository productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }

    @Override
    public List<ProductCategory> findAllCategories() {
        return productCategoryRepository.findAll();
    }

    @Override
    public ProductCategory saveCategory(ProductCategory productCategory) {
        return productCategoryRepository.save(productCategory);
    }

    @Override
    public ProductCategory findById(long id) {
        return productCategoryRepository.findById(id);
    }

    @Override
    public ProductCategory update(ProductCategory productCategory) {
        return productCategoryRepository.save(productCategory);
    }

    @Override
    public void deleteCategory(long id) {
        productCategoryRepository.deleteById(id);
    }
}
