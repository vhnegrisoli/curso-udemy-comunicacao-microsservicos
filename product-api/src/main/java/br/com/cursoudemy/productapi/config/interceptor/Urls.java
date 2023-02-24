package br.com.cursoudemy.productapi.config.interceptor;

import java.util.List;

public class Urls {

    public static final List<String> PROTECTED_URLS = List.of(
        "api/product",
        "api/supplier",
        "api/category"
    );
}
