package br.com.cursoudemy.productapi.modules.sales.client;

import br.com.cursoudemy.productapi.modules.sales.dto.SalesProductResponse;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.service.annotation.GetExchange;
import org.springframework.web.service.annotation.HttpExchange;

import java.util.Optional;

@HttpExchange("/api/orders")
public interface SalesClient {

    @GetExchange("/product/{productId}")
    Optional<SalesProductResponse> findSalesByProductId(@PathVariable Integer productId,
                                                        @RequestHeader(name = "Authorization") String authorization,
                                                        @RequestHeader(name = "transactionId") String transactionId);
}
