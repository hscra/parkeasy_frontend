This is a branch of master `park-easy-frontend` to implement displays parking information (current status and price).

## Procedure

Uwaga!! For backend parts below, it is intended for testing purpose for frontend implementation only, not for entire implementation.

1.  The endpoint: GET [http://localhost:8080/api/locations/${id}/getdetails]

2.  Add `LocationController` class

```Java
@RestController
@RequestMapping("/api")
public class LocationController {
    @Autowired
    private LocationService locationService;
    @Autowired
    private ParkingSpaceDetailService parkingSpaceDetailService;

    public LocationController (LocationService locationService){
        this.locationService = locationService;
    }

    @GetMapping("/locations")
    public List<LocationEntity> getAllLocations() {
        return locationService.getAllLocations();
    }

    @GetMapping("/locations/{id}/getdetails")
    public List<ParkingSpaceDetailDTO> getLocationDetails(@PathVariable Long id) {
        System.out.println("Fetched details: " + parkingSpaceDetailService.getParkingSpaceDetailsByLocationId(id)); // Debugging line
        return parkingSpaceDetailService.getParkingSpaceDetailsByLocationId(id);

    }

}
```

3. Add `ParkingSpacesDetailEntity` class

```java
@Entity
@Getter
@Setter
@Table(name = "getdetails")
public class ParkingSpaceDetailEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String status; // Example: "occupied" or "available"

    @Column
    private double price;

    @ManyToOne
    @JoinColumn(name ="id_locations", referencedColumnName = "id")
    private LocationEntity locationEntity;


    public LocationEntity getIdLocations() {
        return locationEntity;
    }
    public static ParkingSpaceDetailEntity toParkingSpaceDetailEntity(ParkingSpaceDetailDTO parkingSpaceDetailDTO){
        ParkingSpaceDetailEntity parkingSpaceDetailEntity = new ParkingSpaceDetailEntity();
        parkingSpaceDetailEntity.setId(parkingSpaceDetailDTO.getId());
        parkingSpaceDetailEntity.setStatus(parkingSpaceDetailDTO.getStatus());
        parkingSpaceDetailEntity.setPrice(parkingSpaceDetailDTO.getPrice());
        parkingSpaceDetailEntity.setLocationEntity(parkingSpaceDetailDTO.getId_locations());
        return parkingSpaceDetailEntity;
    }

}
```

4. Add `Repository` interface

```java
@Repository
public interface GetDetailsRepository extends JpaRepository<ParkingSpaceDetailEntity, Long> {
    List<ParkingSpaceDetailEntity> findByLocationEntityId(Long locationId);
}
```

5. Add `ParkingSpaceDetailDTO` class

```java
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ParkingSpaceDetailDTO {
    private Long id;
    private String status;
    private double price;
    private LocationEntity id_locations;

    public static ParkingSpaceDetailDTO toParkingSpaceDetailDTO(ParkingSpaceDetailEntity parkingSpaceEntity) {
        ParkingSpaceDetailDTO parkingSpaceDetailDTO = new ParkingSpaceDetailDTO();
        parkingSpaceDetailDTO.setId(parkingSpaceEntity.getId());
        parkingSpaceDetailDTO.setStatus(parkingSpaceEntity.getStatus());
        parkingSpaceDetailDTO.setPrice(parkingSpaceEntity.getPrice());
        parkingSpaceDetailDTO.setId_locations(parkingSpaceEntity.getIdLocations());
        return parkingSpaceDetailDTO;
    }
}

```

6. Add `ParkingSapceDetailService` class

```java
@Service
@RequiredArgsConstructor
public class ParkingSpaceDetailService {
    @Autowired
    private GetDetailsRepository getDetailsRepository;
    public ParkingSpaceDetailService(GetDetailsRepository getDetailsRepository) {
        this.getDetailsRepository = getDetailsRepository;
    }

    public List<ParkingSpaceDetailDTO> getParkingSpaceDetailsByLocationId(Long locationId){
        List<ParkingSpaceDetailEntity> parkingSpaceDetailEntity = getDetailsRepository.findByLocationEntityId(locationId);
        return parkingSpaceDetailEntity.stream()
                .map(ParkingSpaceDetailDTO::toParkingSpaceDetailDTO)
                .collect(Collectors.toList());
//        return ParkingSpaceDetailDTO.toParkingSpaceDetailDTO(parkingSpaceDetailEntity);
    }

}
```

7. Implement `Map.tsx` , `ParkingSpace.tsx` and `Detail.tsx` components

- Prerequisites :
  Add dependencies `google-map-api` and `mysql` in `package.json`

- Refer to `map.tsx` file in the repository. `getLocation()` method will help you to fetch data from Spring.
- `fetchLocationDetails()` will fetch the details data such as status and prices.

- `ParkingSpace` and `Detail` components are seperately involed to rendering as props.
- Add `<Map>` in `page.tsx` to render
