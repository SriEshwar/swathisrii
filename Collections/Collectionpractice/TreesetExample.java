import java.util.Set;
import java.util.TreeSet;

public class TreesetExample {
    public static void main(String[] args) {
        // Create a TreeSet to store unique integers in sorted order
        Set<Integer> numberSet = new TreeSet<>();

        // Add elements to the TreeSet
        numberSet.add(40);
        numberSet.add(10);
        numberSet.add(30);
        numberSet.add(20);
        numberSet.add(50);
        numberSet.add(10); // Duplicate element, will not be added

        // Display elements of the TreeSet
        System.out.println("TreeSet elements: " + numberSet);

        // Check if a specific element is in the TreeSet
        if (numberSet.contains(30)) {
            System.out.println("TreeSet contains 30");
        }

        // Remove an element from the TreeSet
        numberSet.remove(20);
        System.out.println("TreeSet after removing 20: " + numberSet);

        // Iterate over the elements of the TreeSet
        System.out.println("Iterating over TreeSet:");
        for (Integer number : numberSet) {
            System.out.println(number);
        }

        // Clear all elements from the TreeSet
        numberSet.clear();
        System.out.println("TreeSet after clearing: " + numberSet);
    }
}
