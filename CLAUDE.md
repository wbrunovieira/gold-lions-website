@AGENTS.md

## ⚠️ Sempre rastreie o trabalho como issues (skill `track-work`)

Todo chamado, correção, melhoria ou débito técnico DEVE virar uma issue no
projeto "gold-lions-jiujtsu-website" (`cmuwutxsc010lp301i6zezxvz`) no WB Project
Manager, agrupada no milestone da fase, com o status em dia (Backlog/Todo →
In Progress → Done).

Este é um projeto de **MANUTENÇÃO**: o board alimenta métricas de SLA em horas
úteis. Mover para In Progress grava a primeira resposta; mover para Done calcula
o tempo de resolução. Mova o status quando o trabalho realmente acontece, e
ajuste o `reportedAt` quando registrar algo que o cliente pediu antes.

Invoque a skill **`track-work`** (`.claude/skills/track-work/SKILL.md`) — ela tem
o projectId, os status IDs, a localização da API key e o CLI `pm.sh`.
