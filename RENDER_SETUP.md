# Render Setup Instructions

Your labeler now uses persistent storage to keep labels and cursor state across restarts.

## Required: Add Persistent Disk on Render

1. **Go to your Render dashboard**: https://dashboard.render.com
2. **Select your service** (enstarslabel)
3. **Click on "Disks"** in the left sidebar
4. **Click "Add Disk"**:
   - **Name**: `data`
   - **Mount Path**: `/opt/render/project/data`
   - **Size**: `1 GB` (or more if needed)
5. **Click "Save Disk"**
6. **Add Environment Variable**:
   - Go to "Environment" tab
   - Add: `DATA_DIR` = `/opt/render/project/data`
7. **Redeploy your service**

## What This Fixes

Without persistent storage, every time Render restarts your service:

- ❌ All labels are lost (database wiped)
- ❌ Cursor resets to "now" (missing old events)

With persistent storage:

- ✅ Labels persist across restarts
- ✅ Cursor continues from last position
- ✅ No data loss during deployments

## Verification

After setup, check your logs for:

```
Created data directory: /opt/render/project/data
Trying to read cursor from /opt/render/project/data/cursor.txt...
```

On subsequent restarts, you should see:

```
Cursor found: [number] ([timestamp])
```

This confirms your data is persisting!
