package com.haroun.book_network.feedback;

import com.haroun.book_network.book.Book;

public class FeedbackMapper {
    public Feedback toFeedback(FeedbackRequest request) {
        return  Feedback.builder()
                .note(request.note())
                .comment(request.comment())
                .book(Book.builder().id(request.bookId()).archived(false).shareable(false).build())
                .build()
    }
}
