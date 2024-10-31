using Newtonsoft.Json;

namespace Store.Blazor.Extensions
{
    public static class HttpClientExtension
    {
        public static async Task<T> GetAsync<T>(this HttpClient httpClient, string uri)
        {
            var response = await httpClient.GetAsync(uri);
            response.EnsureSuccessStatusCode();

            var responseContent = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(responseContent);
        }
    }
}
