package br.com.cursoudemy.productapi.config.interceptor;

import br.com.cursoudemy.productapi.config.exception.ValidationException;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

import static br.com.cursoudemy.productapi.config.RequestUtil.getCurrentRequest;

@Component
public class FeignClientAuthInterceptor implements RequestInterceptor {

    private static final String AUTHORIZATION = "Authorization";
    private static final String TRANSACTION_ID = "transactionid";

    @Override
    public void apply(RequestTemplate template) {
        var currentRequest = getCurrentRequest();
        template
            .header(AUTHORIZATION, currentRequest.getHeader(AUTHORIZATION))
            .header(TRANSACTION_ID, currentRequest.getHeader(TRANSACTION_ID));
    }
}
