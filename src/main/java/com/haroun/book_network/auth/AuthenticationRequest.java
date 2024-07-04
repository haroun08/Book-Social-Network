package com.haroun.book_network.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Builder
public class AuthenticationRequest {
    @Email(message = "Email is not well formated")
    @NotEmpty(message = "Email required")
    @NotBlank(message = "Email is mandatory")
    private String email;
    @NotEmpty(message = "Password required")
    @NotBlank(message = "Password is mandatory")
    @Size(min=8,message = "min 8 chars")
    private String password;
}
