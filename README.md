This is a branch of master `park-easy-frontend` to implement fetch buildings' location from back-end Spring bott.

## Procedure

It is necessary to implement back-end service in advance to simulate the marking buindlings locations.

Also, the lattitude and logitude information will be required to register the location entity.

Therefore, it can be refer to implement the back end service and then `[Next.js]` will be followed.

1.  The endpoint: GET [http://localhost:8080/map/locations](http://localhost:8080/map/locations)

2.  Add `LocationController` class

```Java
@RestController
@RequestMapping("/api")
public class LocationController {
    @Autowired
    private LocationRepository locationRepository;
    @GetMapping("/locations")
    public List<LocationEntity> getLocations(){
        return locationRepository.findAll();
    }
}
```

3. Add `LocationEntity` class

It assumes that the MySQL shema already incorporated on the server.

```java
@Entity
@Setter
@Getter
@Table(name = "locations")
public class LocationEntity {

    @Id
    private int id_locations;

    @Column
    private double lat;

    @Column
    private double lng;
}
```

4. Add `Repository` interface

```java
public interface LocationRepository extends JpaRepository<LocationEntity, Long> {
}
```

5. MySQL schema
   The table should contain the information to matching the `LocationEntity`

6. Configure `WebConfig` class

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/map/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);

    }
}
```

7. Implement `Map.tsx` in `Next.js`

- Prerequisites
  Add dependencies `google-map-api` and `mysql` in `package.json`

- Refer to `map.tsx` file in the repository. `getLocation()` method will hepl you to fetch data from Spring.

- Add `<Map>` in `page.tsx` to render
