using System;
using JWT.Algorithms;
using JWT.Builder;

namespace Grimoire {
    public static class Util
    {
        public static string CreateToken(string id) => new JwtBuilder()
            .WithAlgorithm(new HMACSHA256Algorithm())
            .WithSecret("replacemewithanactualsecret")
            .AddClaim("exp", DateTime.UtcNow.AddHours(2))
            .AddClaim("id", id)
            .Build();

        public static dynamic ReadToken(string token) => new JwtBuilder()
            .WithSecret("replacemewithanactualsecret")
            .MustVerifySignature()
            .Decode(token);
    }
}