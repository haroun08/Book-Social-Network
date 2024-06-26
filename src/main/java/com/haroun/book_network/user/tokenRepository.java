package com.haroun.book_network.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface tokenRepository extends JpaRepository<Token,Integer> {
    Optional<Token> findByToken(String token);
    
}
