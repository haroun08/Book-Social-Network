package com.haroun.book_network.handler;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.FORBIDDEN;

public enum BusinessErrorCodes {

    NO_CODE(0,HttpStatus.NOT_IMPLEMENTED,"No code"),
    INCORRECT_CURRENT_PASSWORD(300,BAD_REQUEST,"Current password is incorrect"),
    NEW_PASSWORD_DOES_NOT_MATCH(301,BAD_REQUEST,"New password does not match"),
    ACCOUNT_LOCKED(302,BAD_REQUEST,"User account is locked"),
    ACCOUNT_DISABLED(303,BAD_REQUEST,"User account is disabled"),
    BAD_CREDENTIALS(304,FORBIDDEN,"Login and / or password is incorrect")
    ;

    @Getter
    private final int code;
    @Getter
    private final String description;
    @Getter
    private final HttpStatus httpStatus;

    BusinessErrorCodes(int code, HttpStatus httpStatus , String description) {
        this.code = code;
        this.description = description;
        this.httpStatus = httpStatus;
    }
}
