import java.util.HashSet;
import java.util.Set;

public class HashSetExample {
    public static void main(String[] args) {
        // Create a HashSet to store unique integers
        Set<Integer> numberSet = new HashSet<>();

        // Add elements to the HashSet
        numberSet.add(10);
        numberSet.add(20);
        numberSet.add(30);
        numberSet.add(20); // Duplicate element, will not be added

        // Display elements of the HashSet
        System.out.println("HashSet elements: " + numberSet);

        // Check if a specific element is in the HashSet
        if (numberSet.contains(20)) {
            System.out.println("HashSet contains 20");
        }

        // Remove an element from the HashSet
        numberSet.remove(10);
        System.out.println("HashSet after removing 10: " + numberSet);

        // Iterate over the elements of the HashSet
        System.out.println("Iterating over HashSet:");
        for (Integer number : numberSet) {
            System.out.println(number);
        }

        // Clear all elements from the HashSet
        numberSet.clear();
        System.out.println("HashSet after clearing: " + numberSet);
    }
}

