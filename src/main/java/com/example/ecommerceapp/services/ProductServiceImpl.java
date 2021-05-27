package com.example.ecommerceapp.services;

import com.example.ecommerceapp.entities.Product;
import com.example.ecommerceapp.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product findById(long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product update(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(long id) {
        productRepository.deleteById(id);
    }

    @Override
    public List<Product> findByCategoryId(long id) {
//        List<Product> returnedList = new ArrayList<>();
//        List<Product> allProducts = productRepository.findAll();
//        for (Product product : allProducts) {
//            if (product.getCategory().getId() == id) {
//                returnedList.add(product);
//            }
//        }
//        return returnedList;
        return productRepository.findByCategoryId(id);
    }
    @Override
    public List<Product> findByName(String name) {
        return productRepository.findByNameContaining(name);
    }

    @Override
    public List<Product> getAllProducts(Integer pageNo, Integer pageSize, String sortBy) {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

        Page<Product> pagedResult = productRepository.findAll(paging);

        if (pagedResult.hasContent()) {
            return pagedResult.getContent();
        } else {
            return new ArrayList<Product>();
        }
    }
}