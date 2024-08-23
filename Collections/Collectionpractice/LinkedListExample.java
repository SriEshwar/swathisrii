import java.util.LinkedList;

public class LinkedListExample{
    public static void main(String[] args) {

        LinkedList<String> linkedList = new LinkedList<>();

       
        linkedList.add("swathi");
        linkedList.add("sri");
        linkedList.add("akash");

        
        System.out.println("Initial LinkedList: " + linkedList);
        
        linkedList.addFirst("adhithi");
        linkedList.addLast("tinu");

        
        System.out.println("After adding elements: " + linkedList); 

       
        linkedList.removeFirst(); 
        linkedList.removeLast();  

        
        System.out.println("After removing elements: " + linkedList); 
        

        
        System.out.println("Iterating over LinkedList:");
        for (String name : linkedList) {
            System.out.println(name);
        }
    }
}
