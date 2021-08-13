export default{
    port: 1337,
    host: 'localhost',
    dbUri: "mongodb://localhost:27017/rest-api",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICXAIBAAKBgQCNNXSGXtC6jXX7wAXCCSxzPy9k7lXCraLpea8E7hffCszQ4rMh
    s36ySJG8u2rFD22bkTxO8mXYVY3dXcX18O09ZXQ406+n5ca+yh8M+fjeRBg/MvWv
    XaO0d/8o3TQY0H9UFAx+ufj2iLUjC7aS89jYPfSzQLc30tx4IgArYAmWzQIDAQAB
    AoGAZp6BVyFSmTAynMi4poFaL0qs27Gk23yqVvgaa//Hk0za+ba2LXivS0sXtkuR
    VTJYGmUaqdjYkLXkCgqa0ZfMH+ffADV6q3KDxSX4XDAhms4IswrH1bEZzArY2Upa
    E0P2iR1s2fdIabir++FhwHxOPIQjexCRtTM2/B0OTeQWY9UCQQDl8CMYKdGmlrEm
    T0XZno0ZqNWhOIMD4zKEAVqRhoUt2Ek8i0cWF7spWN5HvLgbN5Y4JFosYbz8Lzxq
    Wz+hGwC7AkEAnTbCHAXNZ17tDVJ4/GI8I+r5jhGETcHrpqkRDaW7KeWC6Ttl5cbK
    sZtAR93qccdhC7ia5FSAuCfm74bj9egyFwJBAJ/2zONtjG3BniJRuf1ogS8dtuk/
    IF5e+/C75F8jX5mCQ4j8OAsVnV5pddIgZ1B//mC2YYlIwaoLzpMLQhv5ZisCQHy4
    Dx+Z/sxtwxMZhT97UwiPhXCONu5U0/SAFTZFbwiaudL7OyghH3Xsmv8obq/aowNg
    bQiMfR0bEpqc4UWY8fsCQBQat48REMpbHTbtDUVYXTgyLIHnbTn2wGz4p7A3OHAp
    I64lb1XxAx3MYj8NknUudZIL7tZZyYiY9LRaSlGz88M=
    -----END RSA PRIVATE KEY-----`
}