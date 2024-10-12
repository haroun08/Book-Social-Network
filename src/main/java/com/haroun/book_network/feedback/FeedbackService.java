package com.haroun.book_network.feedback;

import com.haroun.book_network.book.Book;
import com.haroun.book_network.book.BookRepository;
import com.haroun.book_network.exception.OperationNotPermittedException;
import com.haroun.book_network.user.User;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class FeedbackService {
    private final BookRepository bookRepository;
    private final FeedbackMapper feedbackMapper;

    public Integer save(FeedbackRequest request, Authentication connectedUser) {
        Book book = bookRepository.findById(request.bookId())
                .orElseThrow(() -> new EntityNotFoundException("No book found with the ID:: " + request.bookId()));
        if (book.isArchived() || !book.isShareable() ){
            throw new OperationNotPermittedException("You can't give a feedback for an archived or not shareable book");
        }
        User user =((User) connectedUser.getPrincipal());
        if(Objects.equals(book.getOwner().getId(),user.getId())){
            throw new OperationNotPermittedException("You cannot give feedback to your own object");
        }
        Feedback feedback = feedbackMapper.toFeedback(request);
        return null;
    }
}
