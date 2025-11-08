if [[ "$VERCEL_GIT_COMMIT_MESSAGE" == *"[skip ci]"* ]]; then
  echo "🛑 Build cancelled by skip tag"
  exit 0
else
  exit 1
fi
