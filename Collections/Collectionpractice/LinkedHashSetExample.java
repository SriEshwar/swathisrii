import java.util.LinkedHashSet;
import java.util.Set;

public class LinkedHashSetExample {
    public static void main(String[] args) {
        // Create a LinkedHashSet to store unique tasks
        Set<String> todoList = new LinkedHashSet<>();

        // Add tasks to the LinkedHashSet
        todoList.add("Complete Java assignment");
        todoList.add("Buy groceries");
        todoList.add("Read a book");
        todoList.add("Exercise");
        todoList.add("Complete Java assignment"); // Duplicate task, will not be added

        // Display tasks in the order they were added
        System.out.println("To-Do List: " + todoList);

        // Check if a specific task is in the LinkedHashSet
        if (todoList.contains("Buy groceries")) {
            System.out.println("To-Do List contains 'Buy groceries'");
        }

        // Remove a task from the LinkedHashSet
        todoList.remove("Read a book");
        System.out.println("To-Do List after removing 'Read a book': " + todoList);

        // Iterate over the tasks in the LinkedHashSet
        System.out.println("Iterating over To-Do List:");
        for (String task : todoList) {
            System.out.println(task);
        }

        // Clear all tasks from the LinkedHashSet
        todoList.clear();
        System.out.println("To-Do List after clearing: " + todoList);
    }
}

