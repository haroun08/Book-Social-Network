package com.haroun.book_network.feedback;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import javax.net.ssl.SSLSession;

@Service
public interface FeedbackRepository  extends JpaRepository<Feedback,Integer> {

    @Query("""
        select feedback
        from Feedback  feedback
        where feedback.book.id = :bookId
    """)
    Page<Feedback> findAllByBookId(Integer bookId, Pageable pageable);
}
