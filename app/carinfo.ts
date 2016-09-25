export class CarInfo {
  constructor(
    public ListingId: string,
    public Title: string,
    public Price: number,
    public Year: number,
    public Odometer: number,
    public EngineSize: number,
    public Transmission: string
  ) { }
}
