//ArrayList

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;

public class ArrayListExample {

    public static void main(String[] args) {
        ArrayList<String> studentList = new ArrayList<>();

        // 1. add(E e) - Adds the specified element to the end of the list
        studentList.add("Akash");
        studentList.add("Baby");
        studentList.add("Sri");
        studentList.add("Swathi");

        // 2. add(int index, E element) - Inserts the specified element at the specified position
        studentList.add(1, "Soundarya");

        // 3. addAll(Collection<? extends E> c) - Adds all elements from the specified collection
     
        studentList.add("Emma");
        studentList.add("Lian");
        studentList.addAll(studentList);

        // 4. addAll(int index, Collection<? extends E> c) - Inserts all elements from the collection at the specified position
        studentList.addAll(2, studentList);

        // 5. clear() - Removes all elements from the list
        studentList.clear();
        studentList.add("Akash");   

        
        studentList.add("Baby");
        studentList.add("Sri");
        studentList.add("Swathi");

        // 6. contains(Object o) - Returns true if the list contains the specified element
        boolean hasSri = studentList.contains("Sri");
        System.out.println("Is Sri in the list? " + hasSri);

        // 7. get(int index) - Returns the element at the specified position
        String studentAtIndex2 = studentList.get(2);
        System.out.println("Student at index 2: " + studentAtIndex2);

        // 8. indexOf(Object o) - Returns the index of the first occurrence of the specified element
        int indexOfSwathi = studentList.indexOf("Swathi");
        System.out.println("Index of Swathi: " + indexOfSwathi);

        // 9. isEmpty() - Returns true if the list contains no elements
        boolean isEmpty = studentList.isEmpty();
        System.out.println("Is the student list empty? " + isEmpty);

        // 10. lastIndexOf(Object o) - Returns the index of the last occurrence of the specified element
        studentList.add("Akash");
        int lastIndexOfAkash = studentList.lastIndexOf("Akash");
        System.out.println("Last index of Akash: " + lastIndexOfAkash);

        // 11. remove(int index) - Removes the element at the specified position
        String removedStudent = studentList.remove(0);
        System.out.println("Removed student: " + removedStudent);

        // 12. remove(Object o) - Removes the first occurrence of the specified element
        boolean isRemoved = studentList.remove("Baby");
        System.out.println("Is 'Baby' removed? " + isRemoved);

        // 13. removeAll(Collection<?> c) - Removes all elements in the specified collection from the list
        ArrayList<String> removeStudents = new ArrayList<>();
        removeStudents.add("Sri");
        removeStudents.add("Swathi");
        studentList.removeAll(removeStudents);
        System.out.println("After removing specific students: " + studentList);

        // 14. retainAll(Collection<?> c) - Retains only the elements in the list that are contained in the specified collection
        studentList.add("Sri");
        studentList.add("Swathi");
        ArrayList<String> retainStudents = new ArrayList<>();
        retainStudents.add("Sri");
        studentList.retainAll(retainStudents);
        System.out.println("After retaining specific students: " + studentList);

        // 15. set(int index, E element) - Replaces the element at the specified position with the specified element
        String previousName = studentList.set(0, "Akash");
        System.out.println("Replaced " + previousName + " with Akash");

        // 16. size() - Returns the number of elements in the list
        int numberOfStudents = studentList.size();
        System.out.println("Number of students: " + numberOfStudents);

        // 17. subList(int fromIndex, int toIndex) - Returns a view of the portion of the list between fromIndex, inclusive, and toIndex, exclusive
        studentList.add("John");
        studentList.add("Emma");
        studentList.add("Lian");
       

        // 18. toArray() - Returns an array containing all the elements in the list
        Object[] array = studentList.toArray();
        System.out.println("Array of students: " + java.util.Arrays.toString(array));

        // 19. toArray(T[] a) - Returns an array containing all the elements in the list; the runtime type of the returned array is that of the specified array
        String[] studentArray = studentList.toArray(new String[0]);
        System.out.println("Array of students: " + java.util.Arrays.toString(studentArray));

        // 20. sort(Comparator<? super E> c) - Sorts the list according to the order induced by the specified Comparator
        studentList.add("Meena");
        studentList.add("Sophia");
        Collections.sort(studentList);
        System.out.println("Sorted list of students: " + studentList);

        // 21. iterator() - Returns an iterator over the elements in this list in proper sequence
        System.out.println("Students in the list:");
        Iterator<String> iterator = studentList.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // 22. forEach(Consumer<? super E> action) - Performs the given action for each element of the Iterable until all elements have been processed or the action throws an exception
        System.out.println("Students in the list using forEach:");
        studentList.forEach(System.out::println);

        // Clear the list
        studentList.clear();
        System.out.println("After clearing the list: " + studentList);
    }
}
