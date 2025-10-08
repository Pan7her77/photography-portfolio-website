## GitHub Copilot Chat

- Extension Version: 0.22.4 (prod)
- VS Code: vscode/1.95.3
- OS: Mac

## Network

User Settings:
```json
  "github.copilot.advanced": {
    "debug.useElectronFetcher": true,
    "debug.useNodeFetcher": false
  }
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.113.6 (22 ms)
- DNS ipv6 Lookup: ::ffff:140.82.113.6 (18 ms)
- Electron Fetcher (configured): HTTP 200 (261 ms)
- Node Fetcher: HTTP 200 (304 ms)
- Helix Fetcher: HTTP 200 (389 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.114.22 (20 ms)
- DNS ipv6 Lookup: ::ffff:140.82.114.22 (1 ms)
- Electron Fetcher (configured): HTTP 200 (268 ms)
- Node Fetcher: HTTP 200 (271 ms)
- Helix Fetcher: HTTP 200 (286 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).
