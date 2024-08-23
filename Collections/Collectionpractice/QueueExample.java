import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        // Create a Queue using LinkedList
        Queue<String> queue = new LinkedList<>();

        // Add elements to the queue
        queue.add("priya");
        queue.add("sowmiya");
        queue.add("kowsalya");

        // Display the queue
        System.out.println("Queue: " + queue);

        // Remove elements from the queue
        String removedElement = queue.remove();
        System.out.println("Removed element: " + removedElement);

        // Peek at the front element of the queue without removing it
        String frontElement = queue.peek();
        System.out.println("Front element: " + frontElement);

        // Display the queue after removal
        System.out.println("Queue after removal: " + queue);
    }
}
