import java.util.PriorityQueue;
import java.util.Queue;

class Book implements Comparable<Book> {
    public String title;
    public double rating;

    public Book(String title, double rating) {
        this.title = title;
        this.rating = rating;
    }

    public String getTitle() {
        return title;
    }

    public double getRating() {
        return rating;
    }

    @Override
    public int compareTo(Book other) {
        // Higher rating should come first
        return Double.compare(other.getRating(), this.getRating());
    }

    @Override
    public String toString() {
        return "Book{title='" + title + "', rating=" + rating + "}";
    }
}

public class PriorityQueueExample{
    public static void main(String[] args) {
        // Create a PriorityQueue for books
        Queue<Book> bookQueue = new PriorityQueue<>();

        // Add books with different ratings
        bookQueue.add(new Book("Book A", 4.5));
        bookQueue.add(new Book("Book B", 3.8));
        bookQueue.add(new Book("Book C", 4.9));
        bookQueue.add(new Book("Book D", 4.2));

        // Process and display books based on their rating (highest rating first)
        while (!bookQueue.isEmpty()) {
            Book book = bookQueue.poll(); // Retrieves and removes the book with the highest rating
            System.out.println("Processing " + book);
        }
    }
}
