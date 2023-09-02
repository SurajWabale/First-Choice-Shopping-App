using System;
using System.Collections.Generic;

namespace FirstChoice.Models;

public partial class Role
{
    public int RId { get; set; }

    public string RoleName { get; set; } = null!;

    public virtual ICollection<Login> Logins { get; set; } = new List<Login>();
}
