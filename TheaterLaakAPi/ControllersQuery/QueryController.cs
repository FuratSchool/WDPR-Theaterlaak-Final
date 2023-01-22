using EntityGraphQL;
using EntityGraphQL.Schema;
using Microsoft.AspNetCore.Mvc;
using TheaterLaakAPi.Models;

namespace TheaterLaakAPi.ControllersQuery;

public class QueryController: Controller
{
    private readonly DatabaseContext _dbContext;
    private readonly SchemaProvider<DatabaseContext> _schemaProvider;
    public QueryController(DatabaseContext dbContext, SchemaProvider<DatabaseContext> schemaProvider)
    {
        this._dbContext = dbContext;
        this._schemaProvider = schemaProvider;
    }

        [HttpPost]
    public async Task<object> Post([FromBody]QueryRequest query)
    {
        var results = await _schemaProvider.ExecuteRequestAsync(query, _dbContext, HttpContext.RequestServices, null);
        // gql compile errors show up in results.Errors
        return results;
    }
    
}
    