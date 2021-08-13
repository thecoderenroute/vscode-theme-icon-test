/**
 * App
 */
public class App {

    private String properties;

    public static void main(String[] args) {

        App app = new App();

        app.setProperties("Hello there");

        System.out.println("Properties: " + app.getProperties());
    }

    /**
     * @return the properties
     */
    public String getProperties() {
        return properties;
    }

    /**
     * @param properties the properties to set
     */
    public void setProperties(String properties) {
        this.properties = properties;
    }

}
