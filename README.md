# regex-match-file

This GitHub action one has one simple purpose, to fail when the content of a file doesn't match with a given regex.

```yaml
  - name: regex-match-file
    uses: noahreinalter/regex-match-file@latest
      with:
        # The regex pattern you want to use as a string
        regex_pattern: 'regex_pattern'
        # The path to the file as a string
        path: 'path'
```
