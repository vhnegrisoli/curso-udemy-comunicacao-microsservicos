package br.com.cursoudemy.productapi;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/")
public class StatusController {

    @GetMapping
    public ResponseEntity<HashMap<String, Object>> getApiRootStatus() {
        return ResponseEntity.ok(getSuccessResponse());
    }

    @GetMapping("api/status")
    public ResponseEntity<HashMap<String, Object>> getApiStatus() {
        return ResponseEntity.ok(getSuccessResponse());
    }

    private HashMap<String, Object> getSuccessResponse() {
        var response = new HashMap<String, Object>();

        response.put("service", "Product-API");
        response.put("status", "up");
        response.put("httpStatus", HttpStatus.OK.value());

        return response;
    }
}
