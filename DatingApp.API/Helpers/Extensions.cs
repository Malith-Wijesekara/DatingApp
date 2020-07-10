using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string messege){
            response.Headers.Add("Application-Error", messege);
            response.Headers.Add("Access-Control-Expose-headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}