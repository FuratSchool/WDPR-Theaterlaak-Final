public class Betaling
{
    public int id { get; set; } //reference in de post request

    public int amount { get; set; } //amount in de post request

    public string url { get; set; }

    public bool isBetaald { get; set; } 

}