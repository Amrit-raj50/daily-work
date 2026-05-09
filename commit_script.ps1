$files = Get-ChildItem -Path react -Recurse -File
$count = 0

foreach ($file in $files) {
    if ($count -lt 12) {
        $relativePath = $file.FullName.Replace((Get-Location).Path + "\", "").Replace("\", "/")
        git add $relativePath
        git commit -m "add $relativePath"
        $count++
    }
}
git add react
git commit -m "add remaining react folder files"
git push
