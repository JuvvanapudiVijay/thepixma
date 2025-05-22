 <?php
                if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['subscribe'])) {
                    $subscriber_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
                    
                    if (filter_var($subscriber_email, FILTER_VALIDATE_EMAIL)) {
                        $author_email = 'pixmathestudio@gmail.com'; // Replace with the author's email address
                        $subject = 'New Subscriber';
                        $message = "A new user has subscribed with the email: $subscriber_email";
                        $headers = "From: pixmathestudio@gmail.com\r\n"; // Replace with your domain's email
                        
                        // Send email
                        if (mail($author_email, $subject, $message, $headers)) {
                            echo '<p class="message success">Subscription successful! Email sent to the author.</p>';
                        } else {
                            echo '<p class="message error">Failed to send email. Please try again later.</p>';
                        }
                    } else {
                        echo '<p class="message error">Invalid email address. Please try again.</p>';
                    }
                }
                ?>