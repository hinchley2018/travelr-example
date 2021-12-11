class Destination {
    constructor(
        city,
        country,
        continent,
        primary_language,
        timezone,
        currency,
        tickets_available)
    {
        this.city = city
        this.country = country
        this.continent = continent
        this.primary_language = primary_language
        this.timezone = timezone
        this.currency = currency
        this.tickets_available = tickets_available
    }
}
module.exports = Destination;